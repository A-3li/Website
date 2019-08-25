<?php
session_start();
?>


<!DOCTYPE html>
<html>
<head>  
  <title>Log in</title>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
   

</head>
<body>

<div>
 
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #E74C3C; margin:0px" >
        <div ></div>
          <span class="navbar-brand text-light"  >ABCD</span>
          <button href="../index.html"> back to home </button>
          
          
          <?php 
          if(isset($_SESSION['uid'])){
            
            echo '<div style="width: 60%;" ></div>';
            echo '<span style=" color:white; margin-right: 10px;">'.$_SESSION['uid'].'</span>';
            echo '<form  action="databaseConnection/logout.php" method="POST">
            <button type="submit" name="submit">logout</button>
            </form>  ';
          }
          else{

            echo '<div style="width: 30%;"></div>
            <form  action="databaseConnection/databaselogin.php" method="POST" class="form-inline-block">
            <input placeholder="Enter Student ID" type="text" name="user" style="padding:4px;">
            <input placeholder="Enter Password" type="password" name="pass" style="padding:4px;">
            <button class="btn btn-dark " type="submit" name="submit" value="submit" style="color:white; margin-top: -4px;" > Log In </button>
            </form>';
          }
          ?>
          </div>
      </nav>
  

</div>


 <!--jumbotron-->
<div class="jumbotron" align="left" style="text-indent: 6.5%;">
       <img src="" style="width:10%; height:10%;" alt="logo">
        <h1 class="display-4" style="text-indent:6.5%; font-weight: 500">Welcome To Login Test Site </h1>
        <div class="container" style="text-indent:0%;">
        <p class="lead" style="font-weight:500">This is a sample design site</p>  
        </div> 
    </div>


    <!--columns-->
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-4" style="font-size:x-large"><p> Survey </p></div>
            <div class="col-md-4 col-sm-4 col-xs-4" style="font-size:x-large"><p> Guidelines</p></div>
            <div class="col-md-4 col-sm-4 col-xs-4" style="font-size:x-large"><p> Registration Page</p></div>
        </div>
        <div class="row"> 
            <div class="col-md-4 col-sm-4 col-xs-4"><p> sample data <br> survey link not avaliable</p></div>
            <div class="col-md-4 col-sm-4 col-xs-4"><p> Below are some guidelines...</p></div>
            <div class="col-md-4 col-sm-4 col-xs-4"><p> Some other text</p></div>
        </div>

        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-4"><a href="#"><button class="btn btn-outline-secondary " style="border-color:#CCCCCC;color: #333333" > Survey <i class="fas fa-angle-double-right"></i> </button> </a> </div>
            <div class="col-md-4 col-sm-4 col-xs-4"><a href="#"><button class="btn btn-outline-secondary " style="border-color:#CCCCCC;color: #333333">  Guidelines <i class="fas fa-angle-double-right"></i></button> </a> </div>
            <div class="col-md-4 col-sm-4 col-xs-4"><a href="#"><button class="btn btn-outline-secondary " style="border-color:#CCCCCC;color: #333333">  Registration <i class="fas fa-angle-double-right"></i> </button> </a> </div>
        </div>

    </div>

    <hr style="margin-left: 8.5%;margin-right: 8.5%">
    <p style="text-indent: 8.5%;"><i class="far fa-copyright"></i> 2018 sample page</p>


    
  
  






</body>
</html>