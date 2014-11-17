---
layout: 
---
    if($('#contributors').length > 0) {	
		$.getJSON("https://api.github.com/repos/{{site.organization}}/{{site.project}}/contributors?callback=?",
			function(data){
				var contributors = "";
				$.each(data.data, function(i, e) {
					contributors += '<div>' + 
						'<img src="' + e.avatar_url +'" />' +
						'<a class="btn btn-info" href="https://github.com/'+ e.login + '">' + e.login + '</a>' +
						'</div>'
				});
				$('#contributors').html(contributors);
		});
	}
