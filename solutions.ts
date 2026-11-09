const multiplyValue = (value : number, multiplier : number = 2) : number  =>{
  return value * multiplier;
}





type TInputType = string | number | boolean;
type TReturnType = string | number 

const processInput = (value:TInputType):TReturnType =>{

    if(typeof value === 'string'){
        return value.trim().toLocaleLowerCase()
    }else if(typeof value === 'number'){
        return value * 10;
    }else{
        return value? 'Active' : 'Inactive'
    }
    
}





type TCoord = readonly[latitude:number, longitude:number, locationName:string]

const formatCoordinate = (coord: TCoord): string => {
    const [latitude, longitude, locationName] = coord;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
  
}






const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const result: T[] = [];
  for (const arr of arrays) {
   
    result.push(...arr);
    
  }
  return result;
}





interface ICourse {
    title: string
    students: number
    isPublished: boolean
}

const getPopularCourses = (courses: ICourse[], minStudents: number): ICourse[] =>{
    return courses.filter(course => course.isPublished && course.students >= minStudents)
 
}








const pluckValues = <T, K extends keyof T>(items:T[], key:K):T[K][] => {

    return items.map(item=> item[key])

}





class Employee {
    constructor(protected name: string, private baseSalary: number) {


    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}


class Manager extends Employee {
    constructor(name: string, baseSalary: number, private department: string){
        super(name,baseSalary)
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`
    }
}


const manager = new Manager("Alice", 50000, "Engineering");

