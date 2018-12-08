<template>
  <div><input type="text" class="form-control" ref="calendar" :value="date" /></div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'Datepicker',
  model: {
    prop: 'date'
  },
  props: {
    date: {
      type: String,
      required: true
    }
  },
  data: () => ({
    fp: null
  }),
  watch: {
    date: 'updateDatePicker'
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
        this.fp.setDate(this.date)
      }
    }
  }
}
</script>
