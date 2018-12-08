<template>
  <div>
    <label class="calendar-wrapper">
      <input type="text" class="form-control" ref="calendar" :value="value" />
    </label>
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'Datepicker',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    fp: null
  }),
  watch: {
    value: 'updateDatePicker'
  },
  mounted() {
    this.fp = flatpickr(this.$refs.calendar, {
      dateFormat: 'd.m.Y',
      onChange: (selectedDates, dateStr) => {
        this.$emit('input', dateStr)
      }
    })
  },
  beforeDestroy() {
    this.fp.destroy()
  },
  methods: {
    updateDatePicker() {
      if (this.fp) {
        this.fp.setDate(this.value)
      }
    }
  }
}
</script>

<style>
.calendar-wrapper {
  display: flex;
  justify-content: flex-start;
}
</style>
