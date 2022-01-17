import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { feedbackForm, SubmitFeedbackServiceService } from '../submit-feedback-service.service';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.css']
})
export class HomeBlogComponent implements OnInit {

   addMenuForm = this.formBuilder.group({
     userFeedbackName: [''],
     userFeedbackEmail: [''],
     userFeedbackSubject: [''],
     userFeedbackMessage: ['']
   });
  
  
   constructor(private http: HttpClient,
     private router: Router,
     public route: ActivatedRoute,
     private formBuilder: FormBuilder,
     private submitFeedbackService: SubmitFeedbackServiceService) { }
  

  ngOnInit(): void {
  }

  public feedbackForm = new feedbackForm(
    "","","",""
  );
  addMenu(): void {
    this.feedbackForm  =  this.addMenuForm.value;
    console.log(this.feedbackForm);
     this.submitFeedbackService.addMenu(this.feedbackForm).subscribe(
       (res) => {
        alert("Feedback Submitted Successfully");
         window.location.replace('/');
         this.router.navigate(['/']);
     });
  }
  
}
