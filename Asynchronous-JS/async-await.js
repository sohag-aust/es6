const hasMeeting = false;

const meeting = new Promise( (resolve, reject) => {
    console.log('==hello there==');
    
    if(!hasMeeting) {
        const meetingDetails = {
            name:'Technical Meeting',
            location: 'Google Meet',
            time: '10:00 PM'
        };
        resolve(meetingDetails);

    } else {
        reject(new Error('Meeting already scheduled!'));
    }
});

const addToCalendar = (meetingDetails) => {
    return new Promise((resolve, reject) => {
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        resolve(calendar);
    });
};

// async-await reduces the hardness of promise in the last example
async function myMeeting() {

    try{
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);
        console.log(calendar);
    }catch {
        console.log('Error');
    }
}

myMeeting();