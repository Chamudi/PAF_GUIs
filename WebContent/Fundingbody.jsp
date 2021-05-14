<%@page import="model.Fundingbody"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
            <title>Fundingbody Management - GadgetBadget</title>
    
        <link href="myStyle.css" rel="stylesheet" />
        <link rel="stylesheet" href="Views/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="Components/jquery-3.5.0.min.js"></script>
        <script src="Components/Fundingbody.js"></script>

 

    </head>
    
    <body>
        <div class="container">
    
            <p class="font-weight-bold">
                <center>
                    <h1><u><i><b>- Fundingbody Management -</b></i></u></h1>
                </center>
            </p>
            <br><br>
            
            <fieldset>
    
                <legend><b>Add Fundingbody Details</b></legend>
                    <form id="Sponser" name="Sponser" class="border border-light p-5">
                        
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Sponcer ID:</label>
                            <input type="hidden" id="sponcerId" name="sponcerId">    
                            <input type="text" id="sponcerNIC" class="form-control" name="sponcerNIC">
                        </div>
                        
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Sponcer First Name:</label>
                            <input type="text" id="sponcerFname" class="form-control" name="sponcerFname">                            
                        </div>
                
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Sponcer Last Name:</label>
                            <input type="text" id="sponcerLname" class="form-control" name="sponcerLname">                            
                        </div>
                         <div class="form-outline mb-4">
                            <label class="form-label" for="form6Example3" class="col-sm-2 col-form-label col-form-label-sm">Sponcer Email:</label>
                            <input type="text" id="sponcerEmail" class="form-control" name="sponcerEmail">                            
                        </div>
                        <div class="row mb-4">
                            <div class="col">
                              <div class="form-outline">
                                <label class="form-label" for="form6Example1" class="col-sm-2 col-form-label col-form-label-sm">Sponcer phone No:</label>
                                <input type="text" id="sponcerPhoneNo" class="form-control" name="sponcerPhoneNo">                                
                              </div>
                            </div>
                          </div>                        
                        <br> 
                        
                        <!-- <input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary btn-lg btn-block"> 
                        <input type="hidden" id="productID" name="productID" value="">-->
                        
                        <div id="alertSuccess" class="alert alert-success"></div>
                        <div id="alertError" class="alert alert-danger"></div>
                        <input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary btn-lg btn-block">
                        
                    </form>
                
                    
            </fieldset>
            
            <br> 
            
            <div class="container" id="FundingbodyGrid">
                <fieldset>
                    <legend><b>View Sponcer Details</b></legend>
                    <form method="post" action="Fundingbody.jsp" class="table table-striped">
                        <%
                            Fundingbody viewSponcer = new Fundingbody();
                            out.print(viewSponcer.readSponcers());
                        %>
                    </form>
                    <br>
                </fieldset>
            </div>
        </div>
    </body>
</html>