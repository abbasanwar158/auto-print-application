<?php
namespace App\Http\Controllers\api;
use App\Models\TblAttendance;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;
use File;
class AttendanceController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function print()
    {
      $path_for_file = 'F:/auto-print-application/public/uploads/';
      $current_sec = date('s', time());
      $new_sec = $current_sec;
      while ($new_sec + 5 != $current_sec) {
        $user_pin = File::get(public_path("users.log"));
        $new_sec = date('s', time());
        $ids = array();
        $response = Http::get("https://gettabox.channeldispatch.co.uk/api/v1/download_file?user_id=$user_pin");
        foreach ($response['files'] as $key => $value) {
          $fileName = "$path_for_file"."$value[1].pdf";
          if (!file_exists($fileName)) {
            $data = base64_decode($value[0]);
            echo file_put_contents($fileName, $data);
            array_push($ids, $value[2]);
          }
        }
        sleep(5);
      }
    }
}
