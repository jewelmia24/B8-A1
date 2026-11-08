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






function concatenateArrays<T>(...arrays: T[][]): T[] {
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


// Should return courses with at least 50 students and published


