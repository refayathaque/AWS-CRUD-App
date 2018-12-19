{
  this.props.fetchCommentsLoading === true ? (
    <button className="fetch-comments button is-warning is-outlined buttons-spacing" disabled>
      Fetch
    </button>
  ) : (
    <button
      className="fetch-comments button is-info is-outlined buttons-spacing"
      type="button"
      onClick={fetchComments}
    >
      Fetch
    </button>
  );
}
