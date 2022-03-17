// submit form when called with "this"

const submitForm = (btn) =>{
    const theForm = btn.closest('form')
    theForm.submit()
}