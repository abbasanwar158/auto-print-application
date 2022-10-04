<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use File;

class UserController extends Controller
{
  public function index(){
    return view('Users/index');
  }
  public function store(Request $request){
    $storageDestinationPath=public_path("users.log");
    if (!File::exists( $storageDestinationPath)) {
        File::put($storageDestinationPath, $request->pin);
    }
    else{
        File::replace($storageDestinationPath, $request->pin);
    }
    return response("User Pin Saved successfully");
  }

}
