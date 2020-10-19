import PropTypes from "prop-types";

export default {
  name: PropTypes.string.isRequired,
  posterHorizontal: PropTypes.string.isRequired,
  trailer: PropTypes.string.isRequired,
  movieCardMouseOverHandle: PropTypes.func,
  movieCardMouseLeaveHandle: PropTypes.func,
  isActive: PropTypes.bool,
};
