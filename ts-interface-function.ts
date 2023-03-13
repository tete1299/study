interface ISmartphone {
    maker: string;
    name: string;
    battery: number;
    created_at: Date;
    features: string[];
}

let iPhoneX: ISmartphone = {
    maker:'Apple',
    name:'iPhone X',
    battery:65,
    created_at:new Date(2017),
    features:['스피커','카메라','faceID']
}
let galaxyS10: ISmartphone = {
    maker: "Samsung",
    name: "Galazy S10",
    battery: 40,
    created_at: new Date(2019),
    features: ['카메라','5G','지문인식']
}

console.log(iPhoneX);
console.log(galaxyS10);

interface Car {
    brand: string;
    color: string;
    maxPeople: number;
}

interface Bus extends Car{
    price: number;
    isPrivate: boolean;
}
// let pangyoBus: Bus = {
//     //버스에 있는 속성을 넣었지만 카에 있는 속성이 없다는 에러를 띄움
// }

const checkBusTime = (bus:Bus): Date => {
    //버스 시간 확인 코드 가정
    return new Date();
}
const testFunction = (isBoolean: boolean, isSentence: string): {
    result: string
} => {
    return {
        result: 'completed'
    }
}