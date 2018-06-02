# Experimental Featured Module

Selama pengembangan, akan terjadi banyak sekali pembuatan components yang bersifat experimental. Oleh karena itu, harus dihadirkan sebuah featured module khusus untuk keperluan tersebut. Selama pengembangan, kapan saja featured module atau sebagian components anggotanya dapat di-detach dari aplikasi. Tidak digunakan atau dirujuk oleh aplikasi tetapi keberadaannya tetap dipertahankan. Pada saat akan masuk ke lingkungan produksi seluruh featured module yang bersangkutan dapat di-delete sama sekali dari aplikasi.

Berikutnya, saya akan melakukan melakukan experiment. Yaitu membuat component yang akan menampilkan sebuah element yang dapat `mendengarkan` touch-event serta meresponsenya.

## Membuat module baru bernama experimental

0. Modul dibuat dengan bantuan angular-cli

    ```bash
    $ ng generate module experimental
    ```

    Atau

    ```bash
    $ ng g m experimental
    ```

    Hasilnya, terbentuk direktori ./app/experimental/ dengan experimental.module.ts di dalamnya.

    ```javascript
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    @NgModule({
    imports: [
        CommonModule
    ],
    declarations: []
    })
    export class ExperimentalModule { }
    ```

1. Saat akan digunakan, sebuah module baru harus di-import secara manual ke root module sehingga `app.module.ts` akan menjadi seperti ini.

    ```javascript
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    
    import { MaterializeModule } from 'angular2-materialize';
    import { ExperimentalModule } from './experimental/experimental.module';

    import { AppComponent } from './app.component';

    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MaterializeModule,
        ExperimentalModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

## Commit

```bash
$ git log --oneline

c0e2efc (HEAD -> master, origin/master) Project Seed
40a3b30 chore: initial commit from @angular/cli

$ git add .
$ git commit -m "Experimental Feature Module"
$ git push -u origin master
```