var Template = {
  replaceInTemplate: function (template, dataJSON) {
    var re = /<%([^%>]+)?%>/g;
    var match = template.match(re);

    $.each(match, function (_, placeholder) {
      template = template.replace(placeholder, dataJSON[placeholder.slice(2, -2)]);
    });

    return template;
  }
};
