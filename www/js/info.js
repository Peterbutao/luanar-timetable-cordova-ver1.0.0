//id

class UuidCls{

    static idOne() {

        const str = 'abcdefghijklm';
        const num = Math.floor(Math.random() * 13);
        const strNum = num - 1

        const subStr = str.substring(strNum, num);
        const idNum = Math.floor(Math.random() * 9);

        return `${subStr}${idNum}`

    };
    static idTwo() {

        const str = 'nopqrstuvwxyz';
        const num = Math.floor(Math.random() * 13);
        const strNum = num - 1

        const subStr = str.substring(strNum, num);
        const idNum = Math.floor(Math.random() * 9);

        return `${subStr}${idNum}`

    };
    static uuid() {
        const idOne = UuidCls.idOne();
        const idTwo = UuidCls.idTwo();

        const id  = `${idOne}${idTwo}`;



        if (id.length == 3) {

            const num = `${Math.floor(Math.random() * 9)}`;

            const idMod = id + num ;

            return idMod;

        }else if(id.length == 2){

            const numM1 = `${Math.floor(Math.random() * 9)}`;
            const numM2 = `${Math.floor(Math.random() * 9)}`;

            const idMod2 = id + numM1 + numM2 ;

            return idMod2;

            
        }else{
            return id;
        };
    };
};

// date


const date = document.querySelector('.date');
const time = document.querySelector('.time');
const dateOp = {
    weekday : 'long',
    day: 'numeric'
};
const dateIn = new Date();
time.innerHTML = `<p>${dateIn.getHours()} : ${dateIn.getMinutes()}</p>`;
date.innerHTML = `<p> ${dateIn.toLocaleDateString("en-US", {weekday: "long"})} | ${dateIn.toLocaleDateString("en-US", {day: "numeric"}) } </p>`;




// input

class Input{
    static form() {
        document.querySelector('.addbutton').addEventListener('click', function (event) {
            document.querySelector('.dr-mid').classList.toggle('remove');  
            document.querySelector('.formHandle').classList.toggle('handle');  
            document.querySelector('.formHandle').classList.toggle('form');  
            document.querySelector('.home').classList.toggle('remove');  
            
            const string = (document.querySelector('.drct-1').textContent)
            document.querySelector('#id').value = `${string.substring(0,3)}/${UuidCls.uuid()}`;
            
        
        
        
            
        
        
        });
        
    };

    static clear() {


        setTimeout(function(){
            
            topic.value = '' ;
            id.value = '' ;
            const string = (document.querySelector('.drct-1').textContent)
            document.querySelector('#id').value = `${string.substring(0,3)}/${UuidCls.uuid()}`;
        }, 1000)

    };


};
// constructor function

class CourseConstruct {
    constructor (id, topicName) {
        this.id = id;
        this.topic = topicName

    };
};


// data storage
class Store{

    static getTopics(topicKey){
        let books;
        if(localStorage.getItem(`${topicKey}`) === null){
            books = localStorage.setItem(`${topicKey}`, '[]');
        }else{
            books = JSON.parse(localStorage.getItem(`${topicKey}`));
        }
        return books;
    };
    static addTopic(topicData, topicKey){
        const topics = Store.getTopics(topicKey);  


        topics.push(topicData);

        localStorage.setItem(`${topicKey}`, JSON.stringify(topics));

    };
    static removeTopic(id, topicKey){
        const topics = Store.getTopics(topicKey);

        topics.forEach(function(topic, index) {
            if(topic.id == id) {
                topics.splice(index, 1);
            }
        });

        localStorage.setItem(`${topicKey}`, JSON.stringify(topics));
    };
    
};
// ui
class Ui{
    static displayTopics() {

        const storedTopics = Store.getTopics(document.querySelector('.drct-1').textContent);

        const topics = storedTopics;

        topics.forEach(function(topic) {

            Ui.addTopicToList(topic);

        });
    };  

    static addTopicToList(topicParam) {

        const list = document.querySelector('#topic-list');

        const row = document.createElement('tr');

        row.innerHTML = `<td>${topicParam.topic}</td> <td class="delete">${topicParam.id}</td> `;

        list.appendChild(row);




        
    };

    static deleteTopic(element) {

        if(element.classList.contains('delete')) {
            element.parentElement.remove();

        };



    };


    
};

// events

class Events {

    static addEvent() {
        document.querySelector('.button').addEventListener('click', function (event) {

            // input variables
            //variables
        
            const courseIn = document.querySelector('#course').value;
            const topicIn = document.querySelector('#topic').value;
            const idIn = document.querySelector('#id').value;
            
        
        
         
            
        
            // validate 
            if(courseIn === '' || topicIn === '' || idIn === ''){
                document.querySelector('.error').classList.add('er-pop');
                document.querySelector('.error').innerHTML = 'fill in all fields';
        
                setTimeout(function(){
                    document.querySelector('.error').remove();
                }, 3000);
        
            }else{
        
            
            
        
                // instatiate topic
        
                const topic = new CourseConstruct(idIn, topicIn);
                console.log(topic);
        
                //add topic to list
        
                Ui.addTopicToList(topic);
               
        
                Store.addTopic(topic, document.querySelector('#course').value);

        
        
                // clear filds
        
                Input.clear();

            }
        });

    };
    static removeEvent(){

        // remove event

        document.querySelector('#topic-list').addEventListener('click', function(event) {

            Ui.deleteTopic(event.target);
            const topicKey = document.querySelector('.drct-1').textContent;
            Store.removeTopic(event.target.textContent, topicKey);
            console.log(event.target.textContent);

        });


    };
    static displayEvent() {
        // display event


        document.addEventListener('DOMContentLoaded', function (event) {
            Ui.displayTopics();
        });

    };
};






//events


Events.addEvent();
Events.removeEvent();
Events.displayEvent();
// form

Input.form();

// display data
class today{
    static read(weekday) {

            // data

        const object = {
            

                    
        
            Monday:{
                    
                am :{
                    course:'Seed Industry',
                    init:'9 : 00',
                    final: '11 : 00',
                    hours:'2 hours'
                },
                pm:{
                    course:'Bio Chemistry',
                    init:'02 : 00',
                    final:'04 : 00',
                    hours:'10 : 00'
                }
            },
            Tuesday:{
                
                am :{
                    course:'Bio Chemistry',
                    init:'8 : 00',
                    final: '10 : 00',
                    hours: '2 hours'
                },
                pm:{
                    course:'Seed Systems Policy And Law',
                    init:'02 : 00',
                    final:'04: 00',
                    hours: '10 : 00'
                }
            },
            Wednesday:{
                
                am :{
                    course:'Seed Systems Policy And Law',
                    init:'08 : 00',
                    final: '10 : 00',
                    hours: '2 hours'
                },
                pm:{
                    course:'Principals Of Soil Science',
                    init:'02 : 00',
                    final:'04 : 00',
                    hours:'10 : 00'
                }
            },
            Thursday:{
                
                am :{
                    course:'Principals Of Soil Science',
                    init:'8 : 00',
                    final: '10 : 00',
                    hours: '2 hours'
                },
                pm:{
                    course:'Agriculture Meterology',
                    init:'02 : 00',
                    final:'04 : 00',
                    hours:'10 : 00'
                
                }
            },
            Friday:{
                
                am :{
                    course:'Agriculture Meterology',
                    init:'8 : 00',
                    final: '10 : 00',
                    hours: '2 hours'
                },
                pm:{
                    course:'Tissue Culture',
                    init:'02 : 00',
                    final:'04 : 00',
                    hours:'10 : 00'
                }
            },            
            Saturday:{
                
                am :{
                    course:'Tissue Culture',
                    init:'08 : 00',
                    final: '10 : 00',
                    hours: '2 hours'
                },
                pm:{
                    course:'Principals Of Irrigation',
                    init:'02 : 00',
                    final:'04 : 00',
                    hours:'10 : 00'
                
                }
            },
            Sunday:{
                
                am :{
                    course:'Principals of Irrigation',
                    init:'02 : 00',
                    final: '03 : 00',
                    hours: '2 hours'
                },
                pm:{
                    course:'Seed Industry',
                    init:'03 : 00',
                    final:'05 : 00',
                    hours:'10 : 00'
                }
            }
        };
                
            
        
        if (weekday === 'Monday') {
            today.append(
                object.Monday.am.course,
                object.Monday.am.hours,
                object.Monday.am.init, 
                object.Monday.am.final,
            );

        }else if( weekday === 'Tuesday'){
            today.append(
                object.Tuesday.am.course,
                object.Tuesday.am.hours,
                object.Tuesday.am.init, 
                object.Tuesday.am.final,
            );

        }else if( weekday === 'Wednesday'){
            today.append(
                object.Wednesday.am.course,
                object.Wednesday.am.hours,
                object.Wednesday.am.init, 
                object.Wednesday.am.final,
            );



        }else if( weekday === 'Thursday'){
            today.append(
                object.Thursday.am.course,
                object.Thursday.am.hours,
                object.Thursday.am.init, 
                object.Thursday.am.final,
            );


        }else if( weekday === 'Friday'){
            today.append(
                object.Friday.am.course,
                object.Friday.am.hours,
                object.Friday.am.init, 
                object.Friday.am.final,
            );
        }else if( weekday === 'Saturday'){
            today.append(
                object.Saturday.am.course,
                object.Saturday.am.hours,
                object.Saturday.am.init, 
                object.Saturday.am.final,
            );
 


        }else if( weekday === 'Sunday'){
            today.append(
                object.Sunday.am.course,
                object.Sunday.am.hours,
                object.Sunday.am.init, 
                object.Sunday.am.final,
            );

        }else{
            console.log('Unexpecteed Token');
        }
    };

    static append(amCourse,amHour, initTime, finalTime ) {
        
        document.querySelector('.drct-1').innerHTML = `<p>${amCourse}</p>`;
        document.querySelector('#hr').textContent = `${amHour}`;
        document.querySelector('#init-time').textContent = `${initTime}`;
        document.querySelector('#fin-time').textContent = `${finalTime}`;



    };  
    
    

};

today.read(dateIn.toLocaleDateString("en-US", { weekday: "long"}));
document.querySelector('#course').value = (document.querySelector('.drct-1').textContent);
