import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedback = {
    fullname: '',
    email: '',
    feedback: ''
  };

  submitted = false;

  onSubmit(): void {
    const { fullname, email, feedback } = this.feedback;

    const currentDate: Date = new Date();
    const dateString: string = currentDate.toLocaleString();

    let feedbackContent: string = "----------------------------------------\n";
    feedbackContent += `Date: ${dateString}\n`;
    feedbackContent += `Name: ${fullname}\n`;
    feedbackContent += `Email: ${email}\n`;
    feedbackContent += `Feedback: ${feedback}\n`;
    feedbackContent += "----------------------------------------\n\n";

    const feedbackBlob: Blob = new Blob([feedbackContent], { type: 'text/plain' });
    const downloadLink: HTMLAnchorElement = document.createElement('a');
    const fileURL: string = URL.createObjectURL(feedbackBlob);

    downloadLink.href = fileURL;
    downloadLink.download = 'feedback.txt';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(fileURL);

    this.submitted = true;
  }

  }

