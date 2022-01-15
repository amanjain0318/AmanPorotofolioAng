import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubmitFeedbackServiceService {
  menus: feedbackForm[]  =  [];
  constructor(  private http : HttpClient) { 

  }
  addMenu(feedback: feedbackForm):  Observable<feedbackForm> { 
    return this.http.post<feedbackForm>(`${environment.baseUrl}${'submitFeedback'}`, feedback);
  }
}

export class feedbackForm{
  constructor(
  public userFeedbackName: string,
  public userFeedbackEmail:string,
  public userFeedbackSubject: string,
  public userFeedbackMessage: string
  ){
  }
}