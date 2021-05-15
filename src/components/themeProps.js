import { oneOf } from "prop-types";

const props = {
  color: oneOf(["primary", "secondary"]),
};

export default props;
