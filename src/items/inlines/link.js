import React, {Component, PropTypes} from 'react';
import ToolbarIcon from '../toolbarIcon';
import {inlines, utils} from 'slate-plugins';
const {links} = inlines;
const {hasInlines} = utils.has;

export default class Link extends Component {
  constructor(props) {
    super(props);

    this.onClickLink = this.onClickLink.bind(this);
  }

  displayName = this.props.type || 'link';

  static propTypes = {
    state: PropTypes.object,
    icon: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func
  };

  onClickLink(e) {
    let {state, onChange} = this.props;
    e.preventDefault();
    onChange(links(state, this.displayName));
  }

  render() {
    const {state, icon} = this.props;
    const onClick = e => this.onClickLink(e);

    return (
      <ToolbarIcon
        type={this.displayName}
        icon={icon || 'link'}
        onClick={onClick}
        isActive={hasInlines(state, this.displayName)}
      />
    );
  }
}
