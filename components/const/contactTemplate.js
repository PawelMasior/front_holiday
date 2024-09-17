import {escapeHtml} from "../../utils";

export default (from, title, name, scope, message) => ({
  to: ['enquiries@lotangroup.com'],
  replyTo: from,
  message: {
    subject: '[Contact Form] ' + title,
    html: `
    <h3>Contact form message:</h3>
    <b>From: </b>${escapeHtml(name)} [${escapeHtml(from)}]<br>
    <b>Scope: </b>${escapeHtml(scope)}<br>
    <b>Title: </b>${escapeHtml(title)}<br>
    <b>Message: </b><br>
    ${escapeHtml(message)}
    `
  }
})
