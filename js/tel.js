document.addEventListener('DOMContentLoaded', function () {

  const telefoneInput = document.getElementById('telefone');

  function formatarTelefone(value) {

    const cleanedValue = value.replace(/\D/g, '');

    let formattedTelefone = '';

    if (cleanedValue.length > 0) {
      formattedTelefone = '(' + cleanedValue.substring(0, 2);

      if (cleanedValue.length >= 3) {
        formattedTelefone += ') ' + cleanedValue.substring(2, 3);
      }

      if (cleanedValue.length >= 4) {
        formattedTelefone += ' ' + cleanedValue.substring(3, 7);
      }

      if (cleanedValue.length >= 8) {
        formattedTelefone += '  ' + cleanedValue.substring(7, 11);
      }
    }

    return formattedTelefone;
  }
  telefoneInput.addEventListener('input', function () {
    const formattedValue = formatarTelefone(this.value);
    this.value = formattedValue;
  });
  telefoneInput.addEventListener('input', function () {
    if (this.value === '(__) _ ____-____') {
      this.value = '';
    }
  });
});
