import { Component } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './shor-url.component.html',
  styleUrls: ['./shor-url.component.css'],
})
export class ShorUrlComponent {
  nombreUrl: string;
  urlShort: string;
  urlProcesada: boolean;
  loading: boolean;
  mostrarError: boolean;
  textErr: string;

  constructor(private _shortUrlService: ShortUrlService) {
    this.nombreUrl = '';
    this.urlShort = '';
    this.urlProcesada = false;
    this.loading = false;
    this.mostrarError = false;
    this.textErr = '';
  }
  procesarUrl() {
    if (this.nombreUrl === '') {
      this.error('Por favor ingrese URL');

      return;
    }

    this.urlProcesada = false;
    this.loading = true;
    this._shortUrlService.getUrlShor(this.nombreUrl).subscribe(
      (data) => {
        console.log(data);
        this.urlProcesada = true;
        this.urlShort = data.link;
        this.loading = false;
      },
      (err) => {
        if (err.error.description === "The value provided is invalid.") {
          this.error('url invalida');
        }
        this.loading = false;
        console.log(err);
      }
    );
  }

  error(valor: string) {
    this.mostrarError = true;
    this.textErr = valor;
    setTimeout(() => {
      this.mostrarError = false;
    }, 4000);
  }
}
