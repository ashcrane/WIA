$(function() {

        //Function for default alert
    $("#normal").click(function(){
        alert("This is the default alert");
    
    });
    
    //function for basic sweetAlert
    $("#sweet").click(function(){
    
        sweetAlert("This looks so much better!");
    
    
    });
    
    //Function for sweetAlert Title and Message
    $("#title").click(function(){
        swal("Hi There!","This is pretty neat, right?");
    
    });

    //Function for Success Message with sweetAlert
    $("#success").click(function(){
    
        swal("Success!","You have successfully completed the task!", "success");
    
    });

    //Function for Auto-Close with sweetAlert
    
    $("#close").click(function(){
        
        swal({
            title: "This will close automatically!",
            text: "This will close in 2 seconds",
            timer: 2000
        
        
        });
        
    });
    
    //Function for Warning Message with a function attached to the confirm button
    
    $("#warn-confirm").click(function(){
    
    swal({
        title: "Are you sure you want to do this?",
        text: "This will permanently remove this file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#12748C",
        confirmButtonText: "Yes, I'm sure!",
        cancelButtonText: "Wait! I've changed my mind!",
        closeOnConfirm: false,
        
    },
         function(){
    
        swal("Removed!","Your file has been removed.", "success");
    
    });
    
    });
    
    //Function with a passed parameter to show something different when cancel is clicked
    
    $("#warn-cancel").click(function(){
    
    swal({
        title: "Are you sure you want to do this?",
        text: "This will permanently remove this file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#12748C",
        confirmButtonText: "Yes, I'm sure!",
        cancelButtonText: "Wait! I've changed my mind!",
        closeOnConfirm: false,
        closeOnCancel: false,
        
    },
         function(isConfirm){
        if (isConfirm){
        swal("Removed!","Your file has been removed.", "success");
        }else{
            swal("Cancelled!", "Your file has not been removed", "error");
        }
    });
    
    });
    
    //Custom Image on the alert
    
    $("#custom").click(function(){
        swal({
            title: "Awesome!",
            text: "Here is my custom image!",
            imageUrl : "images/smiley.png"
        });
    });
    
    
});