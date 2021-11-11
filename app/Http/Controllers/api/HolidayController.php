<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Holiday;
use Illuminate\Http\Request;

class HolidayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Holiday::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data =  Holiday::create([
            'date' => $request->date,
            'occasion' => $request->occasion,
            'is_deleted' => $request->is_deleted,
            'created_at' => $request->created_at,
            'updated_at' => $request->updated_at
        ]);
        if ($data){
            $res=[
            'status'=>'1',
            'msg'=>'success'
          ];
          }else{
            $res=[
            'status'=>'0',
            'msg'=>'fail'
          ];
        }
          return response()->json($res);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Holiday  $holiday
     * @return \Illuminate\Http\Response
     */
    public function search($date)
    {
      echo $date;
      return Holiday::where('date', $date)->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Holiday  $holiday
     * @return \Illuminate\Http\Response
     */
    public function edit(Holiday $holiday)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Holiday  $holiday
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = Holiday::find($id);
        $data->update([
            'date' => $request->date,
            'occasion' => $request->occasion,
            'is_deleted' => $request->is_deleted,
            'created_at' => $request->created_at,
            'updated_at' => $request->updated_at
        ]);
        if ($data){
            $res=[
            'status'=>'1',
            'msg'=>'success'
          ];
          }else{
            $res=[
            'status'=>'0',
            'msg'=>'fail'
          ];
        }
          return response()->json($res);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Holiday  $holiday
     * @return \Illuminate\Http\Response
     */
    public function archive(Request $request, $id)
    {
      $data = Holiday::find($id);
      $data->update([
          'is_deleted' => $request->is_deleted,
      ]);
      if ($data){
          $res=[
          'status'=>'1',
          'msg'=>'success'
        ];
        }else{
          $res=[
          'status'=>'0',
          'msg'=>'fail'
        ];
      }
        return response()->json($res);
    }
}
