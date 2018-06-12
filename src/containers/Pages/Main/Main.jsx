import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cn from '../../../utils/cn';
import './index.css';

@cn('main')
class Main extends React.Component {
  static propTypes = {
    rnd: PropTypes.number
  };

  render(cn) {
    return (
      <div className={ cn() }>
       Main page {this.props.rnd}
      </div>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  rnd: app.rnd
});

let mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Main);
