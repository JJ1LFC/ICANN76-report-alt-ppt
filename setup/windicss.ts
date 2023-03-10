import { defineWindiSetup } from "@slidev/types";

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
  theme: {
    extend: {
      colors: {
        keio_red: "#C63527",
        keio_blue: "#001E62",
        keio_yellow: "#F1C400",
      },
    },
  },
}));
