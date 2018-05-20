

export class ReminderService {
  //TODO: change to http request and response here
  getUser() {

  }

  getNotes() {

    const notes = [
      {
        title: 'Diabetes control 1',
        doctor: 'Evenly',
        startTime: '12-01-2017 5:00 pm',
        endTime: '12-01-2017 7:00 pm',
        description: 'Take three pills after meal with water.'
      },
      {
        title: 'Diabetes control 2',
        doctor: 'Evenly',
        startTime: '12-01-2017 5:00 pm',
        endTime: '12-01-2017 7:00 pm',
        description: 'Take three pills after meal with water.'
      },
      {
        title: 'Diabetes control 3',
        doctor: 'Evenly',
        startTime: '12-01-2017 5:00 pm',
        endTime: '12-01-2017 7:00 pm',
        description: 'Take three pills after meal with water.'
      },
    ];

    return notes;
  }
}
