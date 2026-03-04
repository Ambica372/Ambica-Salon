
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family: Arial, Helvetica, sans-serif;
}

body{
background:#fff0f5;
color:#333;
line-height:1.6;
}

/* HEADER */

header{
background:#ff4f81;
color:white;
display:flex;
justify-content:space-between;
align-items:center;
padding:15px 40px;
}

header h1{
font-size:26px;
cursor:pointer;
}

/* NAVIGATION */

nav a{
color:white;
text-decoration:none;
margin:0 12px;
font-weight:500;
}

nav a:hover{
text-decoration:underline;
}

/* PAGE SECTIONS */

section{
padding:50px 40px;
text-align:center;
}

/* SERVICE CARDS */

section div{
background:white;
padding:25px;
margin:20px;
border-radius:10px;
box-shadow:0 4px 15px rgba(0,0,0,0.1);
display:inline-block;
width:250px;
vertical-align:top;
}

/* BUTTONS */

button{
background:#ff4f81;
color:white;
border:none;
padding:10px 18px;
border-radius:20px;
cursor:pointer;
font-size:14px;
margin-top:10px;
}

button:hover{
background:#e63a6f;
}

/* FORM */

form{
background:white;
max-width:420px;
margin:auto;
padding:25px;
border-radius:10px;
box-shadow:0 4px 20px rgba(0,0,0,0.1);
}

input, select{
width:100%;
padding:10px;
margin:10px 0;
border:1px solid #ccc;
border-radius:6px;
}

input:focus, select:focus{
outline:none;
border-color:#ff4f81;
}

/* FOOTER */

footer{
background:#222;
color:white;
text-align:center;
padding:25px;
margin-top:40px;
}

footer a{
color:#ff8fb1;
text-decoration:none;
margin:0 8px;
}

footer a:hover{
color:white;
}
