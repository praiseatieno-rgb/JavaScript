// E xporting modules from js
//we export functions, variable, module etc to make them available for use in other parts of the program.

export const calculator = (x, y) =>{
    let difference = x - y 
    console.log("the difference of the two numbers is:", difference)
}

export const simpleIntrest =(p, r, t) =>{
    let si = (p *r *t)/100
    console.log("the intrest gainrd is:", si)
}
//my example

export const TriangleArea = (b, h) =>{
    let area = (1/2 * b * h)
    console.log("the area of the triangle is:", area,"cm2")
}