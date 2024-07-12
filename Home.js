import react from 'react';
import bootstrap from  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class LOGIN extends react.Component
{
    render(){
        return(
        <>
  <div className="d-flex justify-content-center align-items-center min-vh-100">
          <div class="row  bg-white d-flex justify-content-center align-items-center">
            <div class="col-sm-5 text-center">
                  <img src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAAAxlBMVEX++OIfRHD//ub//+n/++T/+OJZbIadp6z+bG///+oAOGobQm8AM2gAMWcTPm0ANWkALWVfdI3k5tkIOmuwuLfV2tAAKmSBj53c4NQmSnWSnKWlrbBHYIDAyMP59uI2VHtrfZH+YGb+0cGttbbq6tmAjpwAImH+3s3M0cg8WXy9wr52h5hMZIOUoaktTXU2VXv+XWP+g4H+kY0AF10AEFwAH2FoeY/+4c/+w7b+tKv+1sb+mpT+jYn+vrL+7tr+qqD+dXb+pZ6+uWNxAAAKSUlEQVR4nO2bi3baSBKGpe4SWBJqgS4gBHTkIAhIgJPJjuNJZpLZ93+prWpxsQ1ms7M7sbKnvpwTt4Xg9E91161ly2IYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEY5jVxXnsCfwdCRpElURrIMtLSsiQCh9fko99+MgBQjwBLVLswjGttidUaB51SF7t1kWiBmsV2uluvd4PZzygRMm8YBJ1Mdj96tu17Gzf5GOJA2dpdearnTYRF5iziIHHFa8/2LwGZb9vKrqazLUq0w8m0miu8FCZCjmLbDxaS7lotc/naU/2ruCOFEqdauAUO/DUOuqhV1dIq+6i5R1bE70G/9kQvAOggLK3BlQJedo4ij22bFiPMcXmqkUSDBTgYSEsuYlqwJX5U1W3dEgWhV/mmN1wuh/79JIIXncRJYbJXaGX9RqFV9tCI3kjgTeWPnPz3IMpcBZ28StN0NR+tl1P0ii/ceUWhwJ2IVixBj1pmQtD5cJ2UQghA8P8oD3fVZVdxTSFE5H28XM5aFihEOlYzePStO7hm84/FxaV6TaElarMT9aJdAmX1jxrOfIuIxuPywkSvKsRwiZEjHm1btUjF/ONcXvCdoAcqOpd4VaElKYTYy1b5GVH9On8hOENhn0/1PFo8VggZulN/6v6tU/7PgGg4eTH70NPN2WtiEu4Vzvp7hRENOs2dcqDsXtKmbSjX95eWaAOUw8nZjiqV8hXmZI61jn1V4ACKEO3W3Ajp0PbatEjFvHfJnRxfToZns4Vo4PV2lLjoQoVmq8LID4N9gJAdr26Tn4H4enrl7vKz10FkySinkYiSfIQJqCPLKq/puwAHVr+2KRiKKtBX63OowgtLDpOCvW4cOIdLpDjVAIM2Jd2yszi4kheEau/73YbMw3BctitjK4epmT/W7XB5XmJ0/90TzpYUNUZpixYpzAKTy0A67W26F10OzNT3Ljr8NKqJ79tU+orttJkOwFqF49UFiRgvLyQ2lymHvq/8NoUKTJQX+yXoYqD2bWOtZxtSe5eEP8HZv0XMxt4mA/y9Nd1FcX+IBZSK2EFKjUAs8Y83oIfUu9l5WxBO3wPdoqniosaiwH8gXO2KluxF0ek+VQh60ll3uvrQ94wm91N7XTflcHZ0R2VW7keOyLaduh4Mtqtmuwqd1Jt6im9phcbnCrNs1/d9P9yZvQR64YXKx3ovGM8xD10t/MGEJg7R1ts7JpH3hjNXQhUv6aMcmYwDlblpP9ilbQgazxSGM6/omCq9Rgfk6DWNDX5AHSd3p8JdRhJddEw+jmCGzgWMKYf0UTLv+d5WOKJWvvfdHupv5JlC/66UMiFZPbzs3sf2iX4iLHmHBrVNy3fq2+oNOO7Gt8OEUnfRxapXVH3bj0k51o6qDWHj+SpFr+nIHVbp/bLpEZ7wx9qSb/ClYWQ1Cu0ws8S4EY/WKufC0fgF+HeaykSqHVsQN848DY3WpDCzZK0eK7R7M3im0EvBpZ92b5DhNoUm5PumUCzNon/9ZXpNoTCTxxnvFca5OFcICbW5bRVvqWtlyn9Vu1K6ZE3vvLb84VxRCJpWqwp69k4FIQ3rCwotMWi8kbdG1+qazbyui6IuvNjrt6DvfU1hOUYrdFZaSlkmO4UptSBP80yhBUXPWFmNy0Yh2hBLKnN++PoCryqEOz/OZdNkFHrjq4W8YENzkGjMGNfSbF2/0wIXeuSqpxmo3bGqgJWHu+rCPkRnIvTIM2YsBXXf/OO7Xt/P/BtPkwSb0zLLYgzgB/Najnv0pRQRRErSgwhKky5UzdtE1YJa/yweWnvzoEIHxuOTDdN+IXGfURScSxApxUpSuGkORDMfN20EIicjvmnyuXLTqn0IVd+3TbtMTPomB0dVy9GhRJALpR3MW0LyKZPV5G5DNszA7fRm9AnoY9SGOj4dihe7mdZ61mtX1oaz97xwQb1qMQq93pbOylbjTRWRHaHakF0cPaYswBsG0YYS9DpzB4GaSYFKvZjKSNCDANOa3ngdB6sWmPCxQqyUuve7uWgKosGuMvNdzSuyTJQ0x1AQDcIgiOvSnfbVtMgTKCedcJCs6rDI9h3hZNoLgmCXX2vD/jgeK6RSFvRhpJsmI+wP2OB4T5mm9LCJaV3RGsZbo9Uq04f17Jhbyhf6Wj+cJwqtUzvi8egpztnw7MbWdDCI5wot2mtatKUF8T/ggkKopkU3e/mw5ifjgkJLZH3Pq8X/icRLCi2xw0BQtCm5/C94phCEpH7g2H9Un4PBenKXeHKlaSE+/2hox2Z+olBg9Mu388zdUXstMtcAPj389tvDp5MCumu7nUcHAaJcdbfbJDPhwdn3TSlV7c7b0E98pBD0YhfYaZkO7k8KxcOH2w9fP93cfni3z6bL0W44iMpVWJiIDno0XiZlNO1tZuidUP2k0gKV1pgX3bWqTyMyFfsmGzWZd6MQvtze3H4C8RZ/fDbZ9ErFag2AhWA8Lk3G7dEBvliFfjASlu4MvdBfCblpnhx6/bB/VAgldX6n5EFNj80oFCjw5ndyOTc3N7fQnNGbhhw9fNGbAJRYUsSko0RBAQ5crIH9sKwLau+ookUKzbNMsTnadLTXKITP71HYH9Tn/YCDB3CAWjexsPYKhXmX6TfpN03lKKjbqqZzl2qMYN4ihSUV6V7zC/lSUki6bt6/Q9vJLzj6xRUVVX8bl76QYf+uNIa3Qzoj1lQbxwvZKCwklNMgGF15hvNHcVAIM3psMpwb53dQ6NzS4vxK2fU3HP4pzPNOikpeB1YzDVD1mj4qfoDZvGPXKKS1gCu5fH0LPlJIDZbGGkeF8M4o/Pzu3btPX97f3t40MuJtExZI+DZ+otAO9FFhWzgoNM85XVb48Bb5TOyX4slBitz7aRTubTg/V/j+KxxoZKji+Mya2P5ECs0+fOZpmn349pSYmH3oq2PGCsmzfahkaxVaZdz07c3FvUKXfOnNl4PJvlp7z5I0pRXo5olgs7Zhbd7fRoX7wxNxT+Z5Y9y7jh/FQ8xpzB3y4QEsQVHPj2eYfAo9moMoYlrbp3hoCXrmtEUKQU87mXkMAVI6fOlVdNC73SvEMEjr9M/PdAjx9k9h0h3abuGgO8/XsbYgopxmu89pQgoSaa9NCqHcKOXVkXlAezIkXUmULUa04rwZrc5fzFb8/du3DzdfTV6aGInKC0NK3jAf9ZQaSAdSzw4KamOJfOj7nZa0CCANhkEQDJc1tW7FTPXjuD9cbqXyesEwHNH2+uMWA+Ht+/dfvjYOR6TToaficDhtmoeivO8vK1d3lirZr/fZJvi124K6iahmDZU5YACx6o5yrH1gsq1SLYzLFPD22z+/PTgn/ynTySifZO5Bg3nucjFJj0dp4Ops9oOVvMQx0sHhAcrmTwaphn/0QNCzvyOkC+LswlOjtcSEDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMP8Nf4FNt/LwsNE1vcAAAAASUVORK5CYII="
                    style={{width: "185px"}} alt="logo"></img>
                  <h4 class="mt-1 mb-5 pb-1">We are The Decor Team</h4>
            </div>
                <form>
                  <p>Please login to your account</p>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control"
                      placeholder="Phone number or email address" />
                    <label class="form-label" for="form2Example11">Username</label>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control" />
                    <label class="form-label" for="form2Example22">Password</label>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                      in</button>
                    <a class="text-muted" href="#!">Forgot password?</a>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-danger">Create new</button>
                  </div>

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-black px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are  here to help you out to decor your home</h4>
                <p class="small mb-0">choose the better decor peices and make your home to look elegant & beautiful</p>
              </div>
            </div>
        

</>
)
}
}
export  default LOGIN;