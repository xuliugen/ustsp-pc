export function disabledStartDate(endDateLabel, startValue) {
  const endValue = this.props.form.getFieldValue(endDateLabel)
  if (!startValue || !endValue) {
    return false
  }
  return startValue.valueOf() > endValue.valueOf()
}

export function disabledEndDate(startDateLabel, endValue) {
  const startValue = this.props.form.getFieldValue(startDateLabel)
  if (!endValue || !startValue) {
    return false
  }
  return endValue.valueOf() <= startValue.valueOf()
}
