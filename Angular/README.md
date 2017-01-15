Using the given files as a starting point, please create a directive that will display the progress to goal for an employee's sales in a given month. After you have created the directive, use it to display the employee's avatar, name and progress bar on the page. A mockup has been included in the assets/images/ directory as a reference for styling.

- Please allot a *maximum* of 2 hours to complete this task
- You are free to use any tools you have at your disposal.
- Angular and Bootstrap have already been included in your index.html file.
- We have created a factory to mock api consumption. You will not need to alter this service to complete the exercise.
- The incoming data will have the following structure:
{
  "revenue_performances": array
  [{
    "id": integer
    "type": string
    "owner": {
      "id": integer
      "name": string
      "first_name": string
      "last_name": string
      "type": string
      "team_id": integer
    }
    "date": date
    "notes": string
    "revenue_target": float
    "revenue_actual": float
    "last_edited_by": {
      "id": integer
      "first_name": string
      "last_name": string
    }
    "last_edited_at": datetime
  }]
}

- There are four items in the "revenue_performances" array.
- You may use the image provided in the assets/images directory as a placeholder for the employee's avatar.
- You will need to calculate the expected progress based on the current day of the month and the overall target for the month. 
- The progress bar should display red if the employee is below their expected progress, and green if they are at or above their expected progress.
