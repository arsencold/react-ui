import React from "react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
  isChecked: false,
  disabled: false,

  argTypes: {
    onChange: { Function },
  },
};

export const checkbox = (args) => <Checkbox {...args} />;
checkbox.args = {
  label: "My checkbox",
  disabled: false,
};
