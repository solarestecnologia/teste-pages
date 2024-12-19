import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://seu-endpoint.com/api/upload'; // Substitua pelo seu endpoint

  constructor(private http: HttpClient) { }

  uploadFiles(pdfFiles: File[], csvXlsxFile: File): Observable<any> {
    const formData: FormData = new FormData();

    pdfFiles.forEach(file => {
      formData.append('pdfFiles', file, file.name);
    });

    formData.append('csvXlsxFile', csvXlsxFile, csvXlsxFile.name);

    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    });

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
