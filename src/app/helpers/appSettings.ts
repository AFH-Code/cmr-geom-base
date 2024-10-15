import { HttpHeaders } from '@angular/common/http';

export class appSettings {
   public static API_ENDPOINT_BASE = 'http://127.0.0.1:8000/';

   public static httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };
}
