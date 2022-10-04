<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <style>
    .login-box{
      max-width: 35%;
      margin: 100px auto;
      background: #fff;
      border-radius: 10px;
      border: 1px solid rgba(0,0,0,.3);
      position: relative;
      box-shadow: 0 1px 15px rgba(0,0,0,.04),0 1px 6px rgba(0,0,0,.04);
      padding-left: 15px;
      padding-right: 15px;
    }
  </style>
<head>
<div>
  <div class="login-box p-5">
    <h2 class="text-center">User Pin Authentication.</h2>
      <form name="add-blog-post-form" id="add-blog-post-form" method="post" action="{{url('store-form')}}">
        @csrf
          <div class="form-group">
            <label for="exampleInputEmail1">Pin</label>
            <input type="number" id="pin" name="pin" class="form-control" placeholder="Please enter your 4 digit PIN.." required="">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </div>
</div>