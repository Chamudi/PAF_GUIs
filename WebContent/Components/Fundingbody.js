//hide alert
$(document).ready(function() {

	$("#alertSuccess").hide();
	$("#alertError").hide();
	$("#sponcerId").val("");
	$("#Sponser")[0].reset();
});

$(document).on("click", "#btnSave", function(event) {

	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	// Form validation-------------------
	var status = validateItemForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	
	// If valid------------------------
	var type = ($("#sponcerId").val() == "") ? "POST" : "PUT";

	$.ajax({
		url : "FundingbodyAPI",
		type : type,
		data : $("#Sponser").serialize(),
		dataType : "text",
		complete : function(response, status) {
			onItemSaveComplete(response.responseText, status);
		}
	});

});

function onItemSaveComplete(response, status) {
	
	if (status == "success") {
		
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success") {
			
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#FundingbodyGrid").html(resultSet.data);
			
		} else if (resultSet.status.trim() == "error") {
			
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} 
	else if (status == "error") {
		
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
		
	} else {
		
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	
	$("#sponcerId").val("");
	$("#Sponser")[0].reset();
}

$(document).on("click", ".btnRemove", function(event) {
	
	$.ajax({
		url : "FundingbodyAPI",
		type : "DELETE",
		data : "sponcerId=" + event.target.value,
		dataType : "text",
		complete : function(response, status) {
			onItemDeleteComplete(response.responseText, status);
		}
	});
});

function onItemDeleteComplete(response, status) {
	
	if (status == "success") {
		
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success") {
			
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#FundingbodyGrid").html(resultSet.data);
			
		} else if (resultSet.status.trim() == "error") {
			
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
		
	} else if (status == "error") {
		
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
		
	} else {
		
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}

// UPDATE==========================================
$(document).on("click",".btnUpdate",function(event)
		{
			$("#sponcerId").val($(this).closest("tr").find('td:eq(0)').text());
			$("#sponcerNIC").val($(this).closest("tr").find('td:eq(1)').text());
			$("#sponcerFname").val($(this).closest("tr").find('td:eq(2)').text());
			$("#sponcerLname").val($(this).closest("tr").find('td:eq(3)').text());
			$("#sponcerEmail").val($(this).closest("tr").find('td:eq(4)').text());
			$("#sponcerPhoneNo").val($(this).closest("tr").find('td:eq(5)').text());
		});


// CLIENTMODEL=========================================================================
function validateItemForm() {
	
	
	if ($("#sponcerNIC").val().trim() == "") {
		return "Please insert NIC.";
	}
	
	
	if ($("#sponcerFname").val().trim() == "") {
		return "Please insert First Name.";
	}
	
	
	if ($("#sponcerLname").val().trim() == "") {
		return "Please insert Last Name.";
	}

	
	if ($("#sponcerEmail").val().trim() == "") {
		return "Please insert Email.";
	}
	
	
	if ($("#sponcerPhoneNo").val().trim() == "") {
		return "Please insert phone no.";
	}
	
	return true;
}
