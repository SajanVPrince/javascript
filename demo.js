// let a=10
// a=20
// var b=10
// b=30
// const c=10
// c=20
// console.log(a,b,c);
// alert("welcome")

// let a=1.2
// console.log(typeof a);

// console.log(10+1);
// console.log(10-1);
// console.log(10*1);
// console.log(10/1);
// console.log(10**1);
// a=10
// a++
// b=10
// b--
// console.log(a,b);

// console.log(10==10 && 10==100);
// console.log(10==100 || 10==100);
// function fun1(){
    // let a=document.getElementById("demo").value
    // console.log(a);
//     let a=parseInt(document.getElementById("demo").value)
//     console.log(typeof a);
//     console.log('Welcome');
// }

// let a=10
// let b=10
// if(a==b){
//     console.log("equal");
// }
// else{
//     console.log('not equal');
    
// }

// for(let i=0;i<=10;i++){
//     console.log(i);   
// }

// let i=0
// while(i<=10){
//     console.log(i);
//     i++
// }

// let i=0
// do{
//     console.log(i);
//     i++ 
// }
// while(i<=10)

// let l=[1,2,3,4,5]
// let l ={name:'sjan',age:22}
// for (i in l){
//     console.log(i);
// }

// for (i of l){
//     console.log(i);
// }

// let a='welcome'
// console.log(a.length);
// console.log(a.charAt(5));
// console.log(a.concat(' ','sajan'));
// console.log(a.endsWith(e));
// console.log(a.startsWith(w));
// console.log(a.slice(0,4));
// console.log(a.trim());
// console.log(a.trimStart());
// console.log(a.trimEnd());

// l=[1,2,3,4,5]
// l.pop()
// console.log(l.length);
// console.log(l.at(2));
// l.push(6,7)
// console.log(l);

// l.shift()
// l.unshift(10)
// l[1]=100
// console.log(l);

// function sample(){
//     console.log('sample1');
// }
// sample()

// let sample1=function(){
//     console.log('sample1');
// }
// sample1()

// let sample2=()=>{
//     console.log('sample2');
// }
// sample2()

let data=[{id:'1',name:'Akhil',age:21},
    {id:'2',name:'jith',age:21},
    {id:'3',name:'roshan',age:21},
    {id:'4',name:'prince',age:21},
    {id:'5',name:'sajan',age:21},
]
function disp(){
    let tbody=document.querySelector("tbody")
    tbody.innerHTML=''
    data.forEach((i)=>{
        let tr=document.createElement("tr")
        let id_td=document.createElement('td')
        id_td.innerHTML=i.id
        tr.appendChild(id_td)
        let name=document.createElement('td')
        name.innerHTML=i.name
        tr.appendChild(name)
        let age=document.createElement('td')
        age.innerHTML=i.age
        tr.appendChild(age)
        let edit_td=document.createElement('td')
        let edit_btn=document.createElement('button')
        edit_btn.innerHTML='edit'
        edit_btn.onclick=function(){
            edit_form(i.id)
        }
        edit_td.appendChild(edit_btn)
        tr.appendChild(edit_td)
        let dlt_td=document.createElement('td')
        let dlt_btn=document.createElement('button')
        dlt_btn.innerHTML='delete'
        dlt_btn.onclick=function(){
            dltdata(i.id)
        }
        dlt_td.appendChild(dlt_btn)
        tr.appendChild(dlt_td)
        tbody.appendChild(tr)
    })}

function dltdata(id){
    data=data.filter((user)=>{
        if(user.id!=id){
            return user
        }
    })
    disp()
}

document.getElementById("addform").addEventListener('submit',function(event){
event.preventDefault()
let id=document.getElementById('id').value
let name=document.getElementById('name').value
let age=document.getElementById('age').value
data.push({id:id,name:name,age:age})
disp()
})

let edit_var
function edit_form(id){
    document.getElementById('addform').style.display='none'
    document.getElementById('editform').style.display='block'
    let editdata=data.find(user=>user.id==id)
    document.getElementById('eid').value=editdata.id
    document.getElementById('ename').value=editdata.name
    document.getElementById('eage').value=editdata.age
    edit_var=id
}
document.getElementById("editform").addEventListener('submit',function(event){
    event.preventDefault()
    let id = document.getElementById('eid').value
    let name=document.getElementById('ename').value
    let age=document.getElementById('eage').value

    data=data.map((user)=>{
        if(user.id==edit_var){
            return{...user,id:id,name:name,age:age}
        }
        return user
    })
    document.getElementById('addform').style.display='block'
    document.getElementById('editform').style.display='none'
    disp()
})
disp()