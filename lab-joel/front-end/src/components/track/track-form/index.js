import React from 'react';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.track
      ? this.props.track
      : {
        title: '',
        artist: '',
        album: this.props.album._id,
      };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.buttonText === 'add Track') this.props.createTrack(this.state);
    if (this.props.buttonText === 'update') this.props.update(this.state);
    this.setState({
      title: '',
      artist: '',
      album: this.props.album._id,
    });
  }

  render() {
    return  (
      <form className="track-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}/>

        <input
          type="text"
          name="artist"
          placeholder="artist"
          value={this.state.artist}
          onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default TrackForm;
