<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/5f59ca6ad3.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Todo List</title>

  </head>

  <body>
    <div class="first-container">
      <div class="second-container">
        <div class="row">
          <div class="col-12">

            <h1 class="first-heading">TO DO LIST WEBAPP</h1>
            
            <h1 class="second-heading">
              Create Task<span class="third-heading"></span>
            </h1>
            <input type="text" id="firstInput" class="first-input" placeholder="What task needs to be done?"/>
            <button class="button" id="firstButton">Add Task</button>
            <span class="add-task-message"></span>


            <h1 class="fourth-heading">
              My Tasks<span class="fifth-heading"></span>
            </h1>
            <ul class="third-container" id="thirdContainer"></ul>

            <button class="button" id="secondButton">Save</button>
            <button class="button" id="deleteAllButton">Delete All Tasks</button>
            <span class="save-message"></span>

            <span class="delete-message"></span>

          </div>
        </div>
      </div>
    </div>
    
    <footer style="text-align: center;color: yellow;">
      <p class="m-0">&copy; 
        <a class="text-white font-weight-bold"></a>Designed by 
        <a class="text-red font-weight-bold "style="color:yellow;" href="https://www.linkedin.com/in/suneel-yekasiri-b6674623b/">
            Suneel Yekasiri</a>
    </p>
     </footer>

  <script src="script.js"></script>

  </body>
</html>

