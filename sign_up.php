<html>
<head>
<style>
/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: 1px solid #ccc;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #ccc;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #254a74;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: auto;
}

button:hover {
  opacity:0.8;
}

/* Add padding to container elements */
.container {
  background-color:#ecf2f9;
  padding: 40px;
  border:1px solid #ccc;
  width:40%;
  height:90%;
  margin:auto;
}

</style>
<body>

  
    
    <div class="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
      <label for="uname"><b>Username</b></label><br>
      <input type="text" placeholder="Enter Username" name="uname" required>
      <br>
      <label for="hpnum"><b></b>Handphone Number</b></label><br>
      <input type="text" placeholder="0123456789" name="hpnum" required>
      <br>
      <label for="cplate"><b>Car Plate</b></label><br>
      <input type="text" placeholder="PJA1234" name="cplate" required>
      <br>
      <label for="psw"><b>Password</b></label><br>
      <input type="password" placeholder="Enter Password" name="psw" required>
      <br>
      <label for="psw-repeat"><b>Repeat Password</b></label><br>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
      <br>
      <label><input type="checkbox" checked="checked" name="remember"> Remember me</label>
      <br>
      <button type="button" style="position:absolute;right:30%" onclick="document.getElementById('id01').style.display='none'" class="button">Cancel</button>
      <button type="submit"style="position:absolute;right:36%">Sign Up</button>
      
      
    </div>
  

</head>

</body>

</html>