const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      counterMessage: "",
      // fullName: "",
    };
  },

  watch: {
    //If you wanna run logic, also update a data property but which shouldn't always do that.
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },

    countMessage() {

      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    },
    // name(value) {
    //   //whenever name changes this watcher option execute
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = value + " " + this.lastName;
    //   }
    // },

    // lastName(value) {
    //   if(value === "") {
    //     this.fullName = "";

    //   }else {
    //     this.fullName = this.name + " " + value;
    //   }
    // }
  },

  computed: {
    // if you want to calculate some output value dynamically
    fullName() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },

    countMessage() {
      if (this.counter < 37) {
        return (this.countMessage = "Not there yet");
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return (this.countMessage = "Too much");
      }
    },
  },

  methods: {
    //only use methods if you know that you want to recalculate a value whenever anything on the page change.
    outputFullName(lastName) {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + lastName;
    },

    
    resetInput() {
      this.name = "";
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      return (this.counter = this.counter + num);
    },
    reduce(num) {
      return (this.counter = this.counter - num);
    },
  },
});

app.mount("#events");
