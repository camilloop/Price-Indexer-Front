export default {
  data () {
    return {
      defaultMessages: {
        errorTitle: 'ERROR!',
        errorMessage: 'Something went wrong',
        successTitle: 'SUCCESS!',
        successMessage: 'Everything went ok!'
      }
    }
  },
  methods: {
    addSuccessMessage: function (text = null, title = null) {
      if (text === null) text = this.defaultMessages.successMessage;
      if (title === null) title = this.defaultMessages.successTitle;

      this.$notify({
        type: 'success',
        title: title,
        text: text
      })
    },
    addErrorMessage: function (text = null, title = null) {
      if (text === null) text = this.defaultMessages.errorMessage;
      if (title === null) title = this.defaultMessages.errorTitle;

      this.$notify({
        type: 'error',
        title: title,
        text: text
      })
    }
  }
};
