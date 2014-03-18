var api, path, repo;
api = "https://api.github.com";
repo = 'gbinal/embedding-github-prototype';
path = 'README.md';

$.ajax({
  headers: {
    'Accept': 'application/vnd.github.v3.raw'
  },
  dataType: 'json',
  url: api + "/repos/" + repo + "/contents/" + path,
  complete: function(data) {
    return $.ajax({
      type: "POST",
      dataType: "html",
      processData: false,
      url: api + "/markdown/raw",
      data: data.responseText,
      contentType: "text/plain",
      success: function(data) {
        return $("#output").html(data);
      }
    });
  }
});
