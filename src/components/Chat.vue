<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h3>Chat App</h3>
        <hr>
      </div>
      <div class="card-body">
        <div class="messages" v-for="(msg, index) in messages" :key="index">
          <Message :message="msg"/>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <form @submit.prevent="sendMessage">
        <div class="form-group">
          <label for="user">User:</label>
          <input type="text" v-model="user" class="form-control form-control-sm">
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <input type="text" v-model="message" class="form-control form-control-sm">
        </div>
        <button type="submit" class="btn btn-dark btn-sm">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

import Message from "./Message";

import { SEND_MESSAGE, MESSAGE } from "../../common/constants";

export default {
  components: {
    Message
  },
  data() {
    return {
      user: "",
      message: "",
      messages: [],
      socket: io("localhost:3001")
    };
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();

      this.socket.emit(SEND_MESSAGE, {
        user: this.user,
        message: this.message
      });

      this.message = "";
    }
  },
  mounted() {
    this.socket.on(MESSAGE, data => {
      this.messages = [...this.messages, data];
    });
  }
};
</script>
