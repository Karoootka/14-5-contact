var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'http://www.cnfpt.fr/sites/default/files/images/verbatim/field_visuel_verbatim/1488365975/icone_contact.png'
        }),
        React.createElement('p', {className: 'contactLabel'}, this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel'}, this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
          this.props.item.email
        )
      )
    )
  },
});
