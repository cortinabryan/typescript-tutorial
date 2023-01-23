// const person: {
//     name: string,
//     age: number
// } = {

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN= "ADMIN",READ_ONLY = 100,AUTHOR = "AUTHOR"};

const person = {
    name: "Bryan",
    age: 30,
    hobbies: ['Jiujitsu', 'Code', 'Dota'],
    role: Role.AUTHOR
};

let favoriteActivities: any[];
favoriteActivities = ['Sports', 1];

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}

if (person.role === Role.AUTHOR){
    console.log('is author')
}

