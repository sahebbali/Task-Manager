import{r as v,u as b,j as e,I as g,a as I,b as w,_ as l,c as i,d as R,s as U}from"./index-61e3ea25.js";const P=()=>{let d,o,c,n,t,r,m=v.useRef(),h=b();const j=()=>{const s=t.files[0];s?I(s).then(a=>{r?r.src=a:console.error("userImgView element is undefined.")}).catch(a=>{console.error("Error converting image to base64:",a)}):console.warn("No image selected.")},u=()=>{let s=d.value,a=o.value,p=c.value,f=n.value,x=m.value,N=r?r.src:"";w(s)?l.error("Valid Email Address Required !"):i(a)?l.error("Name Required !"):i(p)?l.error(" Bio is Required !"):R(f)?i(x)?l.error("Password Required !"):(l.success("Submit"),U({Name:a,email:s,bio:p,mobile:f,password:x,photo:N}),h("/login")):l.error("Valid Mobile  Required !")};return e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"row  justify-content-center",children:e.jsx("div",{className:"col-md-10 col-lg-10 center-screen",children:e.jsx("div",{className:"card animated fadeIn w-100 p-3",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h4",{children:"Sign Up"}),e.jsx("hr",{}),e.jsxs("div",{className:"container-fluid m-0 p-0",children:[e.jsxs("div",{className:"row m-0 p-0",children:[e.jsx("div",{className:"pl-200",children:e.jsx("img",{ref:s=>r=s,className:"icon-nav-img-lg",alt:"user image"})}),e.jsxs("div",{className:"col-4 p-2",children:[e.jsx("label",{children:"Profile Picture"}),e.jsx("input",{onChange:j,ref:s=>t=s,placeholder:"User Email",className:"form-control animated fadeInUp",type:"file"})]}),e.jsxs("div",{className:"col-md-4 p-2",children:[e.jsx("label",{children:"Add Bio"}),e.jsx("input",{ref:s=>c=s,placeholder:"bio",className:"form-control animated fadeInUp",type:"text"})]}),e.jsxs("div",{className:"col-md-4 p-2",children:[e.jsx("label",{children:"Name"}),e.jsx("input",{ref:s=>o=s,placeholder:"First Name",className:"form-control animated fadeInUp",type:"text"})]}),e.jsxs("div",{className:"col-md-4 p-2",children:[e.jsx("label",{children:"Mobile Number"}),e.jsx("input",{ref:s=>n=s,placeholder:"Mobile",className:"form-control animated fadeInUp",type:"mobile"})]}),e.jsxs("div",{className:"col-md-4 p-2",children:[e.jsx("label",{children:"Email Address"}),e.jsx("input",{ref:s=>d=s,placeholder:"User Email",className:"form-control animated fadeInUp",type:"email"})]}),e.jsxs("div",{className:"col-md-4 p-2",children:[e.jsx("label",{children:"Password"}),e.jsx("input",{ref:s=>m=s,placeholder:"User Password",className:"form-control animated fadeInUp",type:"password"})]})]}),e.jsx("div",{lassName:"row mt-2 p-0",children:e.jsx("div",{className:"col-md-4 p-2",children:e.jsx("button",{onClick:u,className:"btn mt-3 w-100 float-end btn-primary animated fadeInUp",children:"Complete"})})})]})]})})})}),e.jsx(g,{})]})};export{P as default};
