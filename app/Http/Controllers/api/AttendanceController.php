<?php

namespace App\Http\Controllers\api;

use App\Models\TblAttendance;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;
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
        $ids = array();
        $response = Http::get('https://gettabox.channeldispatch.co.uk/api/v1/download_file?user_id=7');
        foreach ($response['files'] as $key => $value) {
          $data = base64_decode($value[0]);
          echo file_put_contents("$path_for_file"."$value[1].pdf", $data);
          array_push($ids, $value[2]);
        }
        $res = Http::post("https://gettabox.channeldispatch.co.uk/api/v1/update_printers", [
          'printer_label_ids' => $ids
        ]);
    }
}